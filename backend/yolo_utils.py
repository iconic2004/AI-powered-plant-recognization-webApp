# Class index → Plant name
YOLO_CLASS_MAP = {
    0: "Tulsi",
    1: "Neem",
    2: "Rose"
}

def get_plant_name(results):
    if not results or not results[0].boxes:
        return "Unknown Plant"

    class_id = int(results[0].boxes.cls[0])
    return YOLO_CLASS_MAP.get(class_id, "Unknown Plant")
