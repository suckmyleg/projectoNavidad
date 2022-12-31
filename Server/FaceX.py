import camerasManager
import faceRecogniser
import requests
from tools import Data, Memory
import numpy as np

def short(content, maxx):
	try:
		return content[0:maxx]+"..."
	except:
		return content

class FaceX:
	def __init__(self):
		self.recogniser = faceRecogniser.Recogniser()
		self.manager = camerasManager.Manager()
		self.memory = Memory()

	def recogniseUrl(self, url):
		content, status = self.memory.search(url)
		
		if not status:
			content = requests.get(url, stream=True).raw

			content = np.asarray(bytearray(content.read()), dtype="uint8")
			content = faceRecogniser.cv2.imdecode(content, faceRecogniser.cv2.IMREAD_COLOR)

			self.memory.remember(url, content)

		output = self.recogniser.search(content)

		return output

	def showFaces(self, method, content):
		for(x,y,w,h)

	def recognise(self, method, content):
		try:
			fun = getattr(self, "recognise"+method)
		except:
			print("Incorrect method")
			return "Incorrect method"
		else:
			try:
				output = fun(content)
				print(f"Recognise:\n Method: {method}\n Content: {short(content, 120)}\n Output: {output}")
			except Exception as e:
				print(e)
				return e


x = FaceX()

url = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fjooinn.com%2Fimages%2Fcrowd-of-people-6.jpg&f=1&nofb=1&ipt=0023058b159f871350bcab81cd8509382359881efe7c712bb8f13ba152dc2598&ipo=images"

for i in range(3):
	x.recognise("Url", url)