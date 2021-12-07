sed "s/console.log(\"IS DONE PLACEHOLDER FOR QUALTRICS\")/qthis.clickNextButton();appDiv.remove();/g" dist/js/app.*.js > dist/js/app.js
sed -i "s/\"IS DEV PLACEHOLDER FOR QUALTRICS\"/false/g" dist/js/app.js
sed -i "s/\"UID PLACEHOLDER FOR QUALTRICS\"/Number(Qualtrics.SurveyEngine.getEmbeddedData('colortaskUID'))/g" dist/js/app.js
sed -i "s/\"IS EXPERIMENTAL PLACEHOLDER FOR QUALTRICS\"/Math.random() < 0.5/g" dist/js/app.js