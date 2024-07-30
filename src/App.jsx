import { useState } from "react"

const images = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1709464973748-15ca6633f436?q=80&w=3262&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1708778267097-89d89ef5c35a?q=80&w=3263&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 3,
    url: "https://media.istockphoto.com/id/851904866/photo/winter-landscape.webp?s=170667a&w=0&k=20&c=xgisezSrhA6UiBmz1FXlh_ZaDnfQSg25psvydnYv0qQ="
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1707140281839-a513befc8139?q=80&w=3269&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1708778268689-8155f4b4cb7e?q=80&w=3275&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
]

function App() {

  const [selectedImage, setSelectedImage] = useState({
    id: 1,
    img: images[0].url
  })

  const handleClick = (id) => {
    const clickedImage = images.find(image => image.id === id);
    setSelectedImage({
      id: clickedImage.id,
      img: clickedImage.url
    });
  }

  return (
    <>
      <section className='flex flex-col gap-4 p-5'>
        <div className='w-3/4'>
          <img
            src={selectedImage.img}
            width={800}
            height={800}
            className="rounded-md object-cover"
          />
        </div>
        <div className="flex gap-6">
          {
            images.map((image) => (
              <div
                className={`${image.id === selectedImage.id ? 'border-[3px] flex justify-center border-yellow-300 rounded-lg' : ""}`}
                key={image.id}
                onClick={() => handleClick(image.id)}
              >
                <img src={image.url} alt="image"
                  width={140} height={100}
                  className="rounded-md"
                />
              </div>
            ))
          }
        </div>
      </section>
    </>
  )
}

export default App
