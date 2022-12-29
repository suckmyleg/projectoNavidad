import json
print("IMPORTING CV2")
import cv2
print("IMPORTED CV2")
import requests
import threading
import time





class Mobile:
	def __init__(self, ip):
		self.flash = False
		self.frames = []
		self.lastFrame = b""

		print("Connecting to camera")
		self.camera = cv2.VideoCapture(f'http://{ip}:4747/mjpegfeed')
		print("Connected")

		threading.Thread(target=self.mainGetFrames).start()

	def changeFlash(self, status):
		if(self.flash != status):
			self.switchFlash()

	def switchFlash(self):
		self.flash = self.flash==False

		requests.get("http://192.168.1.115:4747/cam/1/led_toggle")

	def mainGetFrames(self):
		while True:
			success, frame = self.camera.read()  # read the camera frame
			if not success:
				break
			else:
				ret, buffer = cv2.imencode('.jpg', frame)
				frame = buffer.tobytes()
				self.lastFrame = b'--frame\r\n'+b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n'
				#self.frames.append(self.lastFrame)


	def gen_frames(self):
		lastFrame = False

		while True:
			frame = self.lastFrame

			if not frame == lastFrame:
				lastFrame = frame
				yield(frame)
				time.sleep(0.1)
			else:
				time.sleep(0.01)

mobile = Mobile("192.168.1.115")