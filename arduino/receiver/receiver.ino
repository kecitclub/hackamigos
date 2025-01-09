#include <SoftwareSerial.h>

// Define the Bluetooth serial port
SoftwareSerial BTSerial(3, 2); // RX, TX pins (make sure they match your wiring)
int pin;

void setup() {
  Serial.begin(9600);   // Start the serial communication with PC for debugging
  BTSerial.begin(9600); // Start Bluetooth communication at 9600 baud rate

  // Initialize pins as outputs
  pinMode(13, OUTPUT);
  pinMode(12, OUTPUT);
  pinMode(11, OUTPUT);
  // Add more pins as needed
}

void loop() {
  if (BTSerial.available()) {
    // Read the incoming byte
    String command = BTSerial.readStringUntil('\n');
    Serial.println(command);  // For debugging, print command to the serial monitor

    // Parse the command string: PIN:13:ON or PIN:12:OFF
    int colonIndex1 = command.indexOf(':');
    int colonIndex2 = command.indexOf(':', colonIndex1 + 1);
    
    if (colonIndex1 != -1 && colonIndex2 != -1) {
      pin = command.substring(colonIndex1 + 1, colonIndex2).toInt();
      String status = command.substring(colonIndex2 + 1);
      
      if (status == "ON") {
        digitalWrite(pin, HIGH);  // Turn the LED on
      } else if (status == "OFF") {
        digitalWrite(pin, LOW);   // Turn the LED off
      }
    }
  }
}
