from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from ultralytics import YOLO
import wikipedia
from auth import router as auth_router
from yolo_utils import get_plant_name
from database import Base, engine

Base.metadata.create_all(bind=engine)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth_router)

# Load trained YOLO model
model = YOLO("yolov8n.pt")

@app.get("/")
def root():
    return {"status": "Backend running 🚀"}

@app.post("/plant/identify")
async def identify_plant(file: UploadFile = File(...)):
    contents = await file.read()

    with open("temp.jpg", "wb") as f:
        f.write(contents)

    results = model("temp.jpg")

    # 🔥 TEMPORARY LOGIC (DEMO)
    if results and len(results[0].boxes) > 0:
        plant_name = "Tomato Plant"
        confidence = float(results[0].boxes.conf[0])
    else:
        plant_name = "Unknown Plant"
        confidence = 0.0

    try:
        info = wikipedia.summary(plant_name, sentences=2)
    except:
        info = "This plant is commonly used for health and gardening."

    return {
        "plant": plant_name,
        "confidence": round(confidence, 2),
        "info": info
    }
