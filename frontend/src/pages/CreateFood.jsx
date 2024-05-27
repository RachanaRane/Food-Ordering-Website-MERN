import {React,useState} from 'react'
import { useNavigate,Link } from 'react-router-dom';
import { useSnackbar,enqueueSnackbar } from 'notistack';

const CreateFood = () => {
  const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();

    const [name, setName] = useState('');
    const [priceInCents, setPriceInCents] = useState('');
    const [loading, setLoading] = useState(false);

    const [img,setImg]=useState(null);
    const [imgPreview,setImgPreview]=useState(null);

     const handleFileChange=(e)=>{
      const selectedFile=e.target.files[0];
      setImg(selectedFile);
      if(selectedFile){
        const reader=new FileReader();
        renderMatches.onloaded=()=>{
          setImgPreview(reader.result);
        };
        reader.readAsDataURL(selectedFile);
      }else{
        setImgPreview(null);
      }
     }
     const uploadFile = async ()=>{

     }

     const handleSaveFood = async()=>{

     }
    return (
    <div className='p-6 bg-gray-50 min-h-screen flex justify-center items-center'>
       <div className='container max-w-lg shadow-lg rounded-lg p-5 bg-white'>
       <Link to='/admin' className='flex justify-center items-center bg-gray-400 mb-4 w-12 py-2 px-4 text-sm rounded-x1'>Back</Link>
       <h1 className='text-3x1 font-semibold text-gray-800 my-4 '>Create Food</h1>
       <div className='space-y-4'></div>
       <label htmlFor='name' className='block text-lg text-gray-600 mb-2'>Name</label>
       <input
       id="name"
       type="text"
       value={name}
       onChange={(e)=>setName(e.target.value)}
       className="w-full border border-gray-300 px-4 py-2 rounded-md"
       required/>

       <label htmlFor='priceInCents' className='block text-lg text-gray-600 mb-2'>Price In Cents</label>
       <input
       id="priceInCents"
       type="number"
       value={priceInCents}
       onChange={(e)=>setPriceInCents(e.target.value)}
       className="w-full border border-gray-300 px-4 py-2 rounded-md"
       required/>

       <label htmlFor='img' className='block text-lg text-gray-600 mb-2'>Upload Image</label>
       <input
       id="img"
       type="file"
       accept="image/*"
       onChange={handleFileChange}
       className="w-full border border-gray-300 px-4 py-2 rounded-md"
       required/>
       
       {imgPreview && (
        <div className='my-4'>
          <img src={imgPreview} alt="Preview" className='max-w-full h-auto'/>
        </div>
       )}

       <button onClick={handleSaveFood} className='w-full bg-green-500 hover:bg-green-800 text-white my-6 py-3 px-4'>Save</button>
       </div>
    </div>
  )
}

export default CreateFood;
