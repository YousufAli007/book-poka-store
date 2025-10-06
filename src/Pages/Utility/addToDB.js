const getStoredBook=()=>{
  const storedBookSTR =localStorage.getItem("readList");
  if(storedBookSTR){
    const storedBookData =JSON.parse(storedBookSTR)
    return storedBookData;
  }
  else{
    return [];
  }
}

const addToStoredDB =(id)=>{
  const storedBooksDatas =getStoredBook();
  if(storedBooksDatas.includes(id)){
    alert('bai ei id already exist')
  }
  else{
    storedBooksDatas.push(id)
    const data =JSON.stringify(storedBooksDatas);
    localStorage.setItem("readList",data)
    console.log('hello yousf ali')
  }
}
export {addToStoredDB}