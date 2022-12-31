from tools import Data, Memory
import cv2

class Recogniser:
	def __init__(self):
		self.data = Data("faces.b", "pickle")
		self.memory = Memory()


		self.cascPath = "Cascades/haarcascade_frontalface_default.xml"
		self.faceCascade = cv2.CascadeClassifier(self.cascPath)

	def facesFromImage(self, imageGray):
		output, status = self.memory.search(imageGray)
		
		if status:
			return output

		return self.faceCascade.detectMultiScale(
			imageGray,
			scaleFactor=1.1,
			minNeighbors=5,
			minSize=(30, 30),
			flags = cv2.CASCADE_SCALE_IMAGE
			)

	def recogniseFaces(self, image):
		imageGray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

		faces = self.facesFromImage(imageGray)
		
		return faces

	def search(self, content):
		output, status = self.memory.search(content)
		
		if status:
			return output
		
		output = self.recogniseFaces(content)

		self.memory.remember(content, output)

		return output