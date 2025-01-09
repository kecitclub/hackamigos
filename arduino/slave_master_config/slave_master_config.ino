#include <SoftwareSerial.h>

SoftwareSerial BTSerial(10, 11); // RX, TX

void setup() {
  Serial.begin(9600);
  BTSerial.begin(38400); // Default AT mode baud rate for HC-05

  Serial.println("Enter AT commands:");
}

void loop() {
  if (Serial.available()) {
    BTSerial.write(Serial.read());
  }
  if (BTSerial.available()) {
    Serial.write(BTSerial.read());
  }
}
