import Tesseract from 'tesseract.js';

const inputFile = document.getElementById('inputFile');
const scanButton = document.getElementById('scanButton');

scanButton.addEventListener('click', async () => {
  const selectedFile = inputFile.files[0];

  const reader = new FileReader();
  reader.readAsDataURL(selectedFile);

  reader.onload = async () => {
    const image = new Image();
    image.src = reader.result;

    image.onload = async () => {
      const { data: { text } } = await Tesseract.recognize(image, 'eng');

      const textElement = document.createElement('div');
      textElement.innerText = text;
      document.body.appendChild(textElement);
    };
  };
});