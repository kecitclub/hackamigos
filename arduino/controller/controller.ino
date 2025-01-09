#include <SoftwareSerial.h>

SoftwareSerial BTSerial(10, 11); // RX, TX
void setup() {  
  Serial.begin(9600);       // Communication with PC
  BTSerial.begin(9600);     // Communication with HC-05
  Serial.println("Master ready.");
}

void loop() {
  // Relay commands from PC to HC-05
  if (Serial.available()) {
    String command = Serial.readString();
    BTSerial.println(command);
  }

  // Relay messages from HC-05 to PC (for debugging, optional)
  if (BTSerial.available()) {
    String response = BTSerial.readString();
    Serial.println("From Slave: " + response);
  }
}
