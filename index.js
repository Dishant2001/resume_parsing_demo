// var pdf_path = 'Dishant_resume_Sept2022.pdf'
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.1.81/pdf.worker.js';



async function parsepdf(src){
    const loadingTask =  await pdfjsLib.getDocument(src).promise;
    
    const page = await loadingTask.getPage(1);
    return await page.getTextContent();

}

async function getItems(){
    const content = await parsepdf('resume_October2022.pdf');
    const items = content.items.map((item)=>{
        console.log(item.str);
        document.getElementById('resume').insertAdjacentHTML("beforeend",`<p>${item.str}</p>`);
    })
    return items;
}


document.getElementById('load').addEventListener('click',getItems);