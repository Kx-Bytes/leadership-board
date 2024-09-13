import { isValidElement, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { IoIosArrowBack } from "react-icons/io";

function App() {


  const [trans, setTrans] = useState("organization")
  const [values, setValues] = useState(-87)

  const handleClick = (e) => {
    const newValue = e.currentTarget.dataset.value;
    if (trans !== newValue) {
      setTrans(newValue);
      setValues(newValue === "department" ? 87 : -87); 
    }
  };


  const data = [{ name: "Sebastian", rank: "#3", points: 1124, icon: "https://img.icons8.com/?size=96&id=n5ktqRhw2GBX&format=png&color=40C057" }, { name: "Jason", rank: "#4", points: 875, icon: "https://img.icons8.com/?size=512w&id=37322&format=png&color=FA5252" }, { name: "Natlie", rank: "#6", points: 774, icon: "https://img.icons8.com/?size=96&id=n5ktqRhw2GBX&format=png&color=40C057" }, { name: "Serenity", rank: "#7", points: 723, icon: "https://img.icons8.com/?size=96&id=n5ktqRhw2GBX&format=png&color=40C057" }, { name: "Jason", rank: "#4", points: 875, icon: "https://img.icons8.com/?size=512w&id=37322&format=png&color=FA5252" }, { name: "Natlie", rank: "#6", points: 774, icon: "https://img.icons8.com/?size=96&id=n5ktqRhw2GBX&format=png&color=40C057" }, { name: "Serenity", rank: "#7", points: 723, icon: "https://img.icons8.com/?size=512w&id=37322&format=png&color=FA5252" }];

  return (
    <div className='p-0  flex flex-col'>
      <nav className='flex justify-between items-center mt-[20px] mx-8'>
        <div>
          <img src="https://soorajsunil1409.github.io/Week-3-Codechef/assets/left-arrow-C14VXvC3.png" alt="" className='bg-red-200 w-8' />
        </div>
        <div className="text-3xl font-bold">Leaderboard</div>
        <div className='text-6xl font-bold w-8'>
          <img src="https://soorajsunil1409.github.io/Week-3-Codechef/assets/select-DzB7132O.png" alt="" />
        </div>
      </nav>

      <div className='bg-white lg:min-w-[26vw] h-[60px] mt-4 mx-auto flex flex-col rounded-xl items-center text-[17px] min-w-[66vw]'>
        <div className='flex lg:justify-around items-center mt-4 lg:gap-20 gap-20 justify-between'>
          <span className='hover:cursor-pointer' onClick={handleClick} data-value={"organization"}>Organisation</span>
          <span className='hover:cursor-pointer' onClick={handleClick} data-value={"department"}>Department</span>
        </div>
        <div 
          className='bg-[#3a5988] h-[4px] w-[100px] mx-5 mt-3 rounded-2xl'
          style={{ 
            transform: `translateX(${values}px)`, 
            transition: 'transform 0.3s ease-in-out'
          }}
        />
      </div>
      <div className='flex flex-col w-full h-auto my-8 gap-8 lg:flex-row '>

        <div className=' h-[50vh] w-[90vw] mx-auto lg:h-[60vh] lg:w-[40%] flex relative justify-center  gap-[2px] items-end'>
          <div className='w-[29%] h-[38%] bg-[#3a5987] rounded-l-[20px] relative flex flex-col justify-center items-center'>
            <div className='w-[100px] h-[100px] bg-[#989999] rounded-full absolute top-[-60px]'>
              <img src="https://soorajsunil1409.github.io/Week-3-Codechef/assets/Jackson-C5VKmWYc.png" alt="" />
            </div>
            <div className='absolute flex justify-center size-[30px] -translate-y-12 lg:-translate-y-14'>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAYAAABXuSs3AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJjSURBVHgB1ZrbbeJAFIYPw+WZElxCOli2gl0qWCxxfcqmgjgd7D4gJEByUkGSCkIJKYES/Mw157eYCCdgZsYDzHwSmosEfD4e4TNnKJFl4jgOVqtVsN1uAyFEwm3S6XRmZJkSWYBl6yx7u9lsWjwMDn5RqTTj5qnb7T6SBQqLj8fjW45qxN264lvmfIE/B4PBnApQSJylY5ZukT4Jv8Jer/dChggypIA0wN15nk6nf8gQo4gXlM5QLpdb7Xb7iTTRFrcpLTGR1xI/h7REV15Z/JzSEh15JfFLSEtU5U+KX1JaoiKfK34Nackp+aPi15SW5MkfFHdBWnJM/pu4S9KSQ/IZcRel92ju5zafucpkMrl3WBrEo9EokINUHBOcakbkNnVeMrEcpOI8cU8ewCuiwUFuoC+we3F8iWTgIP9GKxaLRYM8goP8Cy2Wyg35RYBVIvgKVPeKLlEXvPv2UTxdKnPyjwTi7+QX8zAME1Gr1WbkEbvCEgnYy4EPrNfrNNkSu8EDeQAH+J0rYDP0U3EM+GfxPzkOB7gp+5/ZYb/f/+v4krnbrzdmSnDVarWJ20GOwZnrA+fi//bnvu2A8DhdLpdvvHScSAUgzZGOvs4f3HO6In9MGhzd5V9bPk8a5NZVriV/ShqcrGRdWl5FGijVDi8lryoNlKu155bXkQZa9fFzyetKA+0TCdvyJtLA6AzIlrypNDA+LtzJP6PWQWbcfX2M61D4gJYLNBEffesUlHBAG8r01BQrR+Io4bF8xN0flHMkznfntUiUM59HlhkOhzeVSgW1yLR6gD8iYHuInRZZ5AM0eZC++VE+lQAAAABJRU5ErkJggg==" alt="" />
              <span className='absolute translate-y-[5px] text-sm'>2</span>
            </div>
            <div className='text-white text-xl mt-5'>
              Jackson
            </div>
            <div className='font-bold text-2xl text-white mt-3'>
              1857
            </div>
          </div>
          <div className='w-[32%] h-[60%] bg-[#3a5987] rounded-t-[50px] relative flex flex-col justify-center items-center'>

            <div className='size-[70px] translate-y-[-180px]'>
              <img src="data:image/png;base64,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" alt="" />
            </div>
            <div className='w-[125px] h-[125px] bg-orange-300 rounded-full absolute top-[-60px]'>
              <img src="https://soorajsunil1409.github.io/Week-3-Codechef/assets/Eiden-Cy55FkjG.png" alt="" />
            </div>
           <div className='absolute flex justify-center size-[30px] -translate-y-16 lg:-translate-y-[5rem]'>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAYAAABXuSs3AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIlSURBVHgB1djNUcJAGMbxZ+PHeKQDU4IlYAXqQRxvtmAFQAViBXJz1INjBdqBlBA7yN3B+L4blvAZ9ith9z+TgSEy/NxZwmYFPFa8o4NfXKJAigOc0mNOL//QMRHX+ILHBDxUvKFLD32Cdmv+LENC+AMMxRU9d8wJPhvhJ3p6afC2jI6h6GEMh6zhhE4J/UlPU9gkMKDpM4RlVnBndPXp1nhjuDd0JbDCG8G9oyuFMV4b3hi6khjhteCNoyuNNn4nvDW0ShNfC28drdLAb4XvDa3agd8I3ztaVYNfgweDVm3BL8GDQ6s24Ofw2YLpG6GhVSv4ZH5iigeEiuYKDGbLZ5mEyxf+cIfQK+QSWqZGvI84StWoJ/ILWX/nElpykBOa22eIqaL0xgcHOsUzUp7jKSIsoetjjghjeIbYOkHOU2WCuJrQvgzBDyU8pukiBzphPV1iHhFL03K9Uv5yHmOEOEZ9LG7L76SEy1EX9rtKLZWp0ebmq0NaMo5oyoSKzwl9rkabSxbPihsMAsTzFF5Cc5vvOV/oHxBBrBhLdG/9kr39Ln//+K1orn5fZX/4WjS3eyerffxONKe3d9geXgvN6e/WNo/XRnPacK5BvBGaM4JzDeCN0ZwxnPOIt0JzVnDOA94azSWwzHF5kMEBLT8fjskNmnKHKdV8yxhHuJcrUoec4ariVW7hXdDRpaOzcjqj4wO8nu75uVX0Bl9M7o5V5a6ju6l/M7fSEhAPUNsAAAAASUVORK5CYII=" alt="" />
              <span className='absolute translate-y-[5px] text-sm'>1</span>
            </div>
            <div className='text-white text-xl mt-5'>
              Eiden
            </div>
            <div className='font-bold text-2xl text-white mt-3'>
              2480
            </div>
          </div>
          <div className='w-[29%] h-[38%] bg-[#3a5987] rounded-r-[20px] relative flex flex-col justify-center items-center'>
            <div className='w-[100px] h-[100px] bg-red-600 rounded-full absolute top-[-60px]'>
              <img src="https://soorajsunil1409.github.io/Week-3-Codechef/assets/Emma-28u1or3Z.png" alt="" />
            </div>
            <div className='absolute flex justify-center size-[30px] -translate-y-12 lg:-translate-y-14'>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAYAAABXuSs3AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKTSURBVHgB1dlNbtpAFMDx94aAEN1Yaom6dE5QcoKC1BiyoycoOUGaExRO0PYEoScISz4iwRE4At1VCVG9adrG2K8zrgaRBIM/BjP+b7AdOf4JDTAeIyhs3DSNh/v7KkPPJMA34hgRfucv00KpNKn1ZjYoCkFB48Zr0yH3ExI0CcCA4Kt185jr1Po/ZpCwxPDrevncI/gS5RwEbJ8MbzqQoETw6/rhpUfUgnhN86UXtbjDJzY8IVoWGx8Lrggti4WPDFeMlkXGR4LvCC2LhA8N3zFaFhofCp4SWhYKvxWeMlq2Fb8Rvie0bCM+EL5ntCwQvxauCVq2Fv8Mrhla9gzPVv86ssqfNUSLKs7vX1erB5ZwMcvjU9KPoGsE1YF12Ja7/lDx59OeO+abJmhenuWOxHzef8f/LhZNyABaxG9Y/FHhwxnDc8hKBB/EC46rhuEU8j8hSx0UjtmiWKxA1nIeKoxc14QMxiCjCfgUMhY7QJvlHWfGt5Ut1KSRQ2zKahPb5j9D2XnXEaen8gcIkRItzqQa0lf/Re4P6+WxmA+AziHOrMHNkdhcfqu4mDsD3ce6R+/l5hIuxg3fuwBN85AurNHt8rP46Hvc6t92+ZEz0CwC6jQG80cLq2tv3YaNcgs8uAQNEuj6cN5+ejzwZlkHfBBatHF5Yp/4TWjR1gWhfeC3oUWhluDSxIdBi0IveqaBD4sWRVpm3iU+CloUeWF/F/ioaFGsRykq8XHQotgPr1Tg46JFyR4XWi+bHjCBN6Kcxy9qE3l87nHXhZgluud8N7zruSx3jEC90CchTIiglgT9/98oatR4VfU8bCHiW/4A33xyEZsQevyG5dtJfz4BBSmDr3bVNI3iH3s5fE779gwU9w9WD1r6ifz9KAAAAABJRU5ErkJggg==" alt="" />
              <span className='absolute translate-y-[5px] text-sm'>3</span>
            </div>
            <div className='text-white text-xl mt-5'>
            Emma Aria
            </div>
            <div className='font-bold text-2xl text-white mt-3'>
            1674
            </div>
          </div>
        </div>
        <div className='bg-[#3a5987] w-[98vw] lg:w-[35%] h-[60vh] rounded-[50px] overflow-y-scroll mx-auto mt-[50px]'>
          {data.map((item) => {
            return (
              <div key={item.rank} className=' bg-[#3a5987] text-white mt-[10px] '>
                <div className='flex justify-between mx-[20px] items-center my-[20px]'>
                  <div className='flex gap-[20px]'>
                    <div className='border-4 rounded-full w-14 h-14 flex justify-center items-center text-[20px]'>{item.rank}</div>
                    <div className='my-auto'>{item.name}</div>
                  </div>
                  <div className='flex flex-col items-end gap-[5px]'>

                    <div>{item.points}</div>
                    <div className='w-5 rotate-180'>
                      <img src={item.icon} alt="" />
                    </div>
                  </div>
                </div>
                <div className='w-[95%] h-[1px] bg-white mx-auto'></div>
              </div>
            )

          })}
        </div>
      </div>
    </div>
  )
}

export default App
