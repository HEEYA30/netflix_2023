// import { useQuery } from "react-query";
// import { getMovies, IGetMoviesResult } from "../api";
// import { styled } from "styled-components";
// import { makeImagePath } from "../utilities";
// import { motion, AnimatePresence } from "framer-motion";
// // AnimatePresence : 컴포넌트가 render되거나 destroy될때 효과 줌
// import { useState } from "react";

// const Wrapper = styled.div`
//   background : black;
//   padding-bottom: 200px;
// `;

// const Loader = styled.div`
//   height : 20vh;
//   display : flex;
//   justify-content: center;
//   align-items: center;
// `;

// const Banner = styled.div<{bgPhoto:string}>`
//   height : 100vh;
//   background-color: cornflowerblue;
//   display : flex;
//   flex-direction: column;
//   justify-content: center;
//   padding : 60px;
//   //? 선형재료() : 상단투명, 아래 어둡게
//   background-image: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,1)), url(${(props) => props.bgPhoto});
//   background-size: cover; // img크기만큼 
// `;

// const Title = styled.h2`
//   font-size : 70px;
//   /* margin-bottom : 20px; */
// `;

// const Overview = styled.p`
//   font-size : 35px;
//   width : 50%; // body의 50%일까?
// `;

// const Slider = styled.div`
//   position: relative;
//   top: -100px; // 그래야 위로 올라감
// `;

// const Row = styled(motion.div)`
//   display: grid; // combination with 'float' and 'position??
//   gap: 5px;// 내용물들 사이의 갭
//   grid-template-columns: repeat(6, 1fr);
//   position: absolute;
//   width: 100%;
// `;

// const Box = styled(motion.div)<{ bgPhoto: string }>`
//   background-color: white;
//   height: 200px;
//   background-image: url(${(props) => props.bgPhoto});
//   background-size: cover;
//   background-position: center center;
// `;

// const rowVariants = {
//   hidden: { // 내용물이 보이지 않을 때
//     x: window.outerWidth + 5,// +5하는 이유 : gap의 크기(5px) 때문
//   },
//   visible: { // 보일 때
//     x: 0,
//   },
//   exit: { // 사라질 때
//     x: -window.outerWidth - 5, // 사용자화면크기 = window.outerWidth or window.innerWidth
//   },
// };

// const offset = 6; // 한 슬라이드엔 6개의 box가 들어감
// 18개의 요소가 들어간 배열에서 6개씩 끊어 반환하는 함수 : slice or offset*pages(넷플릭스에선) 
// 그함수는 offset*pages + offset이 될것
// 0페이지에선(인덱스상 첫번째) 0+6== 6개가 반환됨
// 1페이지에선 6+6 == 2번째의 6개가 반환됨...

// function Home() {

//   const { data, isLoading } = useQuery<IGetMoviesResult>(
//     ["movies", "nowPlaying"], 
//     getMovies
//   );
//   // useQuery([a, setA], fetcher)
//   // fetcher은 데이터를 받아오고 JSON을 리턴
//   // useQuery는 fetcher을 사용해 data를 뿌려줄 환경을 만듬
//   // 데이터 뿌리기는 

//   const [index, setIndex] = useState(0);  // 인덱스로 슬라이딩효과 주기
  
//   const [leaving, setLeaving] = useState(false); // 슬라이딩할 때마다 큰 빈 블록이 생겨서 해결하기 위해 만든 state

//   const incraseIndex = () => {
//     if (data) {
//       if (leaving) return; // == return nothing
//       toggleLeaving();

//       const totalMovies = data.results.length - 1; // 최초영화는 배경으로 쓰니까
//       const maxIndex = Math.floor(totalMovies / offset) - 1; // -1 : 인덱스는 0으로 시작하니까 + 영화수가 바뀔수 있으므로 정수로 바꿔주자(올림처리)
//       setIndex((prev) => (prev === maxIndex ? 0 : prev + 1)); // 2페이지까지 갔으면 다시 0페이지로 돌아와야하니까
//     }
//   };
//   const toggleLeaving = () => setLeaving((prev) => !prev);// 반전시킴
  
 
//     return (
//       <Wrapper>{isLoading ? (
//       <Loader>Loading</Loader>
//       ) : (
//       <>
//       <Banner bgPhoto={makeImagePath(data?.results[0].backdrop_path || "")}> 
//       {/* backdrop이 제공 안 될시, ""를 보내란 뜻 */}
//         <Title>{data?.results[0].title}</Title>
//         <Overview>{data?.results[0].overview}</Overview>
//       </Banner>

//       <Slider> 
//         {/* 효과 주기 */}
//             <AnimatePresence initial={false} onExitComplete={toggleLeaving}>   {/* exit이 끝났을 때 실행 */}
//               {/* 하나의 행 */}
//               <Row
//                 variants={rowVariants}
//                 initial="hidden" // Q. 왜 const rowVariants의 속성을 불러오는데 {hidden}이라고 안 하지?
//                 animate="visible"
//                 exit="exit"
//                 transition={{ type: "tween", duration: 1 }}
//                 // tween
//                 key={index} 
//                 // ***key값(index)가 변경될 때== 새 Row가 생성됨 == 기존 Row는 파괴됨 == exit실행됨
//               >
//                   {data?.results
//                   .slice(1)
//                   .slice(offset * index, offset * index + offset)
//                   .map((movie) => (
//                     <Box
//                     // ***motion사용시 다 render할 필요없음, key속성만 있으면 됨
//                       key={movie.id}
//                       bgPhoto={makeImagePath(movie.backdrop_path, "w500")}
//                     />
//                   ))}
               
               
               

               
//               </Row>
//             </AnimatePresence>
//       </Slider>

//       </>
//       )}
//       </Wrapper>
//     );
//   }

//   export default Home;

  
import { useQuery } from "react-query";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { getMovies, IGetMoviesResult } from "../api";
import { makeImagePath } from "../utilities";
import { useState } from "react";

const Wrapper = styled.div`
  background: black;
  padding-bottom: 200px;
`;

const Loader = styled.div`
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Banner = styled.div<{ bgPhoto: string }>`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 60px;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
    url(${(props) => props.bgPhoto});
  background-size: cover;
`;

const Title = styled.h2`
  font-size: 68px;
  margin-bottom: 20px; ;
`;

const Overview = styled.p`
  font-size: 30px;
  width: 50%;
`;

const Slider = styled.div`
  position: relative;
  top: -100px;
`;

const Row = styled(motion.div)`
  display: grid;
  gap: 5px;
  grid-template-columns: repeat(6, 1fr);
  position: absolute;
  width: 100%;
`;

const Box = styled(motion.div)<{ bgPhoto: string }>`
  background-color: white;
  background-image: url(${(props) => props.bgPhoto});
  background-size: cover;
  background-position: center center;
  height: 200px;
  font-size: 66px;

  &:first-child {
    transform-origin: center left;
  }
  &:last-child {
    transform-origin: center right;
  }
`;

const Info = styled(motion.div)`
  padding: 10px;
  background-color: ${(props) => props.theme.black.lighter};
  opacity: 0;
  position: absolute;
  width: 100%;
  bottom: 0;
  h4 {
    text-align: center;
    font-size: 18px;
  }
`;

const rowVariants = {
  hidden: {
    x: window.outerWidth + 5,
  },
  visible: {
    x: 0,
  },
  exit: {
    x: -window.outerWidth - 5,
  },
};

const boxVariants = {
  normal: {
    scale: 1,
  },
  hover: {
    scale: 1.3,
    y: -80,
    transition: {
      delay: 0.5,
      duaration: 0.1,
      type: "tween",
    },
  },
};

const infoVariants = {
  hover: {
    opacity: 1,
    transition: {
      delay: 0.5,
      duaration: 0.1,
      type: "tween",
    },
  },
};

const offset = 6;

function Home() {
  /*  
    - useQuery의 첫 번째 인자로 쿼리 키를 넣어주고, 두 번째로는 fetcher를 넣어줍니다. 세 번째에서 옵션을 설정해주고 결과값을 반환 받습니다. 
     - fetch(`${BASE_PATH}/movie/now_playing?api_key=${API_KEY}`).then((response) => response.json() 
     -> 이처럼 반환값은 json형식, data라는 변수에 저장됨
     -> data를 통해(data의 속성이 아님!) movie에 접근 
      EX. {data?.results.map( (movie) => (
                    <Box key={movie.id}></Box>
                     )
           }

     -> 해석하면 json형식의 data에서 results속성값만큼 반복해서 렌더링(map)하는데 매개변수로 movie를 사용한다. 렌더링하는게 <Box></Box>이고 그 box들을 구별하는 키가 매개변수로 넣은 movie다. 

        근데 movie가 어디서 왔냐고!!!!!!
  */
  const { data, isLoading } = useQuery<IGetMoviesResult>(
    ["movies", "nowPlaying"],
    getMovies
  );
  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const incraseIndex = () => {
    if (data) {
      if (leaving) return;
      toggleLeaving();
      const totalMovies = data.results.length - 1;
      const maxIndex = Math.floor(totalMovies / offset) - 1;
      setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
    }
  };

  const toggleLeaving = () => setLeaving((prev) => !prev);
  return (
    <Wrapper>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <Banner
            onClick={incraseIndex}
            bgPhoto={makeImagePath(data?.results[0].backdrop_path || "")}//backdrop_path가 존재하지 않는 이미지는 movie.backdrop_path || movie.poster_path로 처리해서 poster_path 이미지로 대체할 수 있습니다.
          >
            <Title>{data?.results[0].title}</Title>
            <Overview>{data?.results[0].overview}</Overview>
          </Banner>
          <Slider>
            <AnimatePresence initial={false} onExitComplete={toggleLeaving}>
              <Row
                variants={rowVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ type: "tween", duration: 1 }}
                key={index}
              >
                {data?.results
                  .slice(1)
                  .slice(offset * index, offset * index + offset)
                  .map((movie) => (
                    <Box
                    //movie는 어디서 왔을까.. map메소드의 movie파라미터 넣은 함수라서 가능
                    // movie파라미터는 api에서 온 getMovies에서 가져옴
                      key={movie.id}
                      whileHover="hover"
                      initial="normal"
                      variants={boxVariants}
                      transition={{ type: "tween" }}// tween은 기본CSS인 spring을 없앰
                      bgPhoto={makeImagePath(movie.backdrop_path, "w500")}
                    > 
                    {/* Box는 부모, Info는 자식, 자식은 부모의 속성 사용가능  */}
                      <Info variants={infoVariants}>
                        <h4>{movie.title}</h4>
                      </Info>
                    </Box>
                  ))}
              </Row>
            </AnimatePresence>
          </Slider>
        </>
      )}
    </Wrapper>
  );
}
export default Home;