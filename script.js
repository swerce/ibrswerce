const imageInput = document.getElementById('imageInput');
const removeButton = document.getElementById('removeButton');
const outputImage = document.getElementById('outputImage');

removeButton.addEventListener('click', async () => {
  const file = imageInput.files[0];
  if (!file) {
    alert('Please select an image file.');
    return;
  }

  const formData = new FormData();
  formData.append('image', file);

  try {
    const response = await fetch('http://127.0.0.1:5000/remove_background', {
      method: 'POST',
      body: formData,
      mode: 'cors' // Add this line
    });

    if (response.ok) {
      const blob = await response.blob();
      outputImage.src = URL.createObjectURL(blob);
    } else {
      alert('Error processing the image.');
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }
});
