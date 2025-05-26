export async function POST(req){
try {
    const {prompt}=await req.json()
    console.log(prompt);
    
} catch (error) {
    
}
}