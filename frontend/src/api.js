export const identifyPlant = async (image) => {
    const form = new FormData();
    form.append("file", image);
  
    const res = await fetch("http://127.0.0.1:8000/plant/identify", {
      method: "POST",
      body: form,
    });
  
    return res.json();
  };
  