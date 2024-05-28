// import { HfInference } from '@huggingface/inference'

// const hf = new HfInference(config.HF_TOKEN)
// // Hugging Face Inference API docs: https://huggingface.co/docs/huggingface.js/inference/README

// const textToGenerate = "The definition of machine learning inference is "

// const response = await hf.textGeneration({
//     inputs: textToGenerate,
//     model: "HuggingFaceH4/zephyr-7b-beta"
// })

// console.log(response)



document.querySelector('.btn#add-btn').addEventListener('click', () => {
    fetchOutput();
})

async function fetchOutput() {
    const HF_WORKER_URL = 'https://huggingface-api-worker.brauliopf.workers.dev/'
    
    try {
        // Make Request
        const url = `${HF_WORKER_URL}`
        const response = await fetch(url)

        // Handle Response
        if(!response.ok) {
            const errMsg = await response.text()
            throw new Error('Worker error: ' + errMsg)
        }
        document.querySelector('#output').textContent = await response.text()
    } catch(err){
        console.error(err.message)
    }
}