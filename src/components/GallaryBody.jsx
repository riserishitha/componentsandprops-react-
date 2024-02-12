export default function(props){
  return(
      <div>
      {props.imageData.map(image=>{
          return(
            <div key={image.id} className="body">
              <img src={image.img} alt=""></img>
      </div>
          )
        })
      }
    </div>  
  )
}