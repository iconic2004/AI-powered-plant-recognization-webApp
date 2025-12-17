from embedchain import App

app = App()

def ask_plant(question, plant_name):
    app.add(f"{plant_name} is a plant.")
    return app.query(question)
