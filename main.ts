basic.showIcon(IconNames.Sad)
ESP8266_IoT.initWIFI(SerialPin.P8, SerialPin.P12, BaudRate.BaudRate115200)
ESP8266_IoT.connectWifi("MIWIFI_D69B", "KC24YQ6J")
if (ESP8266_IoT.wifiState(false)) {
    basic.pause(100)
}
basic.showIcon(IconNames.Happy)
basic.pause(500)
basic.forever(function () {
	
})
