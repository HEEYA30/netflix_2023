// import { Link, useRouteMatch } from "react-router-dom";
// import  styled  from "styled-components";
// import { motion, useAnimation, useScroll} from "framer-motion";
// import { useState, useEffect } from "react";

// const Nav = styled.nav`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   position: fixed;
//   width: 100%;
//   top: 0;
//   background-color: black;
//   font-size: 14px;
//   padding: 20px 60px;
//   color: white;
// `;

// const Col = styled.div`
//   display: flex;
//   align-items: center;
// `;

// const Logo = styled(motion.svg)`
//   margin-right: 50px;
//   width: 95px;
//   height: 25px;
//   fill: ${(props) => props.theme.red};
//   path {
//     stroke-width: 6px;
//     stroke: white;
//   }
// `;

// const Items = styled.ul`
//   display: flex;
//   align-items: center;
// `;

// const Item = styled.li`
//   margin-right: 20px;
//   color: ${(props) => props.theme.white.darker};
//   transition: color 0.3s ease-in-out;
//   position: relative;
//   display: flex;
//   justify-content: center;
//   flex-direction: column;
//   &:hover {
//     color: ${(props) => props.theme.white.lighter};
//   }
// `;

// const Search = styled.span`
//   color: white;
//   display : flex;
//   align-items: center;
//   position : relative;
//   svg {
//     height: 25px;
//   }
// `;

// const Circle = styled(motion.span)` // 클릭시 포인터로서 기능
//   position: absolute; // absolute가 있는 자식이 움직임, relative한 Item은 안 움직임!!
//   width: 5px;
//   height: 5px;
//   border-radius: 5px;
//   bottom: -5px;
//   left: 0; // 좌우 가운데를 하고 싶다면
//   right: 0; // left : 00, right : 0, margin : 0 auto
//   margin: 0 auto; //를 하면 돼
//   background-color: ${(props) => props.theme.red}; // 다른 항목의 값을 불러오는 방법 이해하기
// `;

// const Input = styled(motion.input)`
//   transform-origin : right center; // 변화가 시작하는 위치, 디폴트는 CENTER
//   // 따라서 SCALEX할 경우 중앙에서 가로축방향으로 뻗어나감
//   position : absolute;
//   left : -150px;
//   right : 0px;
//   padding : 5px 10px;
//   padding-left : 40px;
//   z-index : -1;
//   color : white;
//   font-size : 16px;
//   background-color: transparent; // 투명
//   border : 1px solid ${ (props) => props.theme.white.lighter };
// `;

// const logoVariants = { //variants 를 함수로 정의해 동적으로 애니메이션을 바꿀 수 있게 할 수 있다. 
//   // (이 함수는 하나의 인수를 받고 animation 객체를 반환한다.) 
//   // 이 인수는 컴포넌트의 custom prop에 의해서 값을 전달받는다. 
//   normal: { // 평상시
//     fillOpacity: 1,
//   },
//   active: {
//     fillOpacity: [0, 1, 0], // 0,과 달리 반복되는 애니메이션!
//     // scale : [0, 0.3, 1, 0.8, 0] 등도 가능!
//     transition: {
//       repeat: Infinity, // 얼마나 반복되는지, 이경우 무한
//     },
//   },
// };

// const navVariants = {
//   top : {
//     backgroundColor : "rgba(0,0,0,0)",
//   },
//   scroll : {
//     backgroundColor : "rgba(0,0,0,1)",
//   },
// };

// function Header() {

//   const [searchOpen, setSearchOpen] = useState(false);
  
//   const homeMatch = useRouteMatch("/");
//   const tvMatch = useRouteMatch("/tv");

  
//   const inputAnimation = useAnimation();
//   const navAnimation = useAnimation();

//   const { scrollY } = useScroll();


//   const toggleSearch = () => {
    
//     if (searchOpen) {
//       // trigger close the animation
//       inputAnimation.start({
//         scaleX: 0,
//       });
//     } else {
//       // trigger open the animation
//       inputAnimation.start({ 
//         scaleX: 1,
//       });
//     }

//     setSearchOpen( (prev) => !prev )
//   };

//   useEffect(() => {
//     scrollY.onChange(() => {
//       if (scrollY.get() > 80) {
//         navAnimation.start("scroll");
//       } else {
//         navAnimation.start("top");
//       }
//     });
//   }, [scrollY, navAnimation]);


//   return (
//     <Nav variants={navVariants} anmiate={navAnimation} initial={"top"}>
//       <Col>
//         <Logo
//           variants={logoVariants}
//           whileHover="active" // ?
//           animate="normal"
//           // initial="normal"
//           xmlns="http://www.w3.org/2000/svg"
//           //XML 네임스페이스(namespace)를 명시,
//           //xml에서의 import 기능이라고 보면 된다. 즉, 해당 위치에 있는 라이브러리를 각각 임의의 변수에 담아서 사용하겠다는 의미이다.
//           width="1024"
//           height="276.742"
//           viewBox="0 0 1024 276.742"
//         >
//           <motion.path d="M140.803 258.904c-15.404 2.705-31.079 3.516-47.294 5.676l-49.458-144.856v151.073c-15.404 1.621-29.457 3.783-44.051 5.945v-276.742h41.08l56.212 157.021v-157.021h43.511v258.904zm85.131-157.558c16.757 0 42.431-.811 57.835-.811v43.24c-19.189 0-41.619 0-57.835.811v64.322c25.405-1.621 50.809-3.785 76.482-4.596v41.617l-119.724 9.461v-255.39h119.724v43.241h-76.482v58.105zm237.284-58.104h-44.862v198.908c-14.594 0-29.188 0-43.239.539v-199.447h-44.862v-43.242h132.965l-.002 43.242zm70.266 55.132h59.187v43.24h-59.187v98.104h-42.433v-239.718h120.808v43.241h-78.375v55.133zm148.641 103.507c24.594.539 49.456 2.434 73.51 3.783v42.701c-38.646-2.434-77.293-4.863-116.75-5.676v-242.689h43.24v201.881zm109.994 49.457c13.783.812 28.377 1.623 42.43 3.242v-254.58h-42.43v251.338zm231.881-251.338l-54.863 131.615 54.863 145.127c-16.217-2.162-32.432-5.135-48.648-7.838l-31.078-79.994-31.617 73.51c-15.678-2.705-30.812-3.516-46.484-5.678l55.672-126.75-50.269-129.992h46.482l28.377 72.699 30.27-72.699h47.295z" />
//         </Logo>
//         <Items>
//           <Item>

//             {/* Link써야지, <a>태그를 쓰면 안돼 SPA만들고 있으니깐 */}
//             <Link to="/">Home {homeMatch?.isExact && <Circle layoutId="circle"/>}</Link>
//             {/* isExact : [boolean] true일 경우 전체 경로가 완전히 매칭될 경우에만 요청을 수행.  
//             JavaScript의 논리 연산자 &&를 사용하면 쉽게 엘리먼트를 조건부로 넣을 수 있습니다.

//             true && expression은 항상 expression으로 평가되고 && 뒤의 엘리먼트는 조건이 true일때 출력이 됩니다. 조건이 false라면 React는 무시하고 건너뜁니다.


//             */}
//           </Item>
//           <Item>
//             <Link to="/tv">Tv Shows {tvMatch && <Circle layoutId="circle"/>}</Link>
//           </Item>
//         </Items>
//       </Col>
//       <Col>
//         <Search>
//           <motion.svg // motion붙이는 순간 animate가능
//               onClick={toggleSearch} // 돋보기svg클릭시 toggle작동
//               animate={ { x: searchOpen ? -185 : 0} }//x좌표가 searchOpen이 참일때 -180만큼 x좌표 이동
//               transition={ { type : "linear"} } //선형적
//               fill="currentColor"
//               viewBox="0 0 20 20"
//               xmlns="http://www.w3.org/2000/svg"
//           >

         
        
//             <path
//               fillRule="evenodd"
//               d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
//               clipRule="evenodd"
//             ></path>
//           </motion.svg>
//           <Input
//             animate={inputAnimation}
//             initial={ {scaleX : 0} }
//             transition={{ type: "linear" }}
//             // animate={{ scaleX: searchOpen ? 1 : 0 }} // 가로로(X축방향) searchOpen되는 순간 비율=1
//             placeholder="Search for movie or tv show..."
//           />
//         </Search>
//       </Col>
//     </Nav>
//   );
// }

// export default Header;
import { Link, useRouteMatch } from "react-router-dom";
import styled from "styled-components";
import { motion, useAnimation, useScroll } from "framer-motion";
// animation +state
// useScrol 
import { useEffect, useState } from "react";

const Nav = styled(motion.nav)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  font-size: 14px;
  padding: 20px 60px;
  color: white;
`;

const Col = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled(motion.svg)`
  margin-right: 50px;
  width: 95px;
  height: 25px;
  fill: ${(props) => props.theme.red};
  path {
    stroke-width: 6px;
    stroke: white;
  }
`;

const Items = styled.ul`
  display: flex;
  align-items: center;
`;

const Item = styled.li`
  margin-right: 20px;
  color: ${(props) => props.theme.white.darker};
  transition: color 0.3s ease-in-out;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  &:hover {
    color: ${(props) => props.theme.white.lighter};
  }
`;

const Search = styled.span`
  color: white;
  display: flex;
  align-items: center;
  position: relative;
  svg {
    height: 25px;
  }
`;

const Circle = styled(motion.span)`
  position: absolute;
  width: 5px;
  height: 5px;
  border-radius: 5px;
  bottom: -5px;
  left: 0;
  right: 0;
  margin: 0 auto;
  background-color: ${(props) => props.theme.red};
`;

const Input = styled(motion.input)`
  transform-origin: right center;
  position: absolute;
  right: 0px;
  padding: 5px 10px;
  padding-left: 40px;
  z-index: -1;
  color: white;
  font-size: 16px;
  background-color: transparent;
  border: 1px solid ${(props) => props.theme.white.lighter};
`;

const logoVariants = {
  normal: {
    fillOpacity: 1,
  },
  active: {
    fillOpacity: [0, 1, 0],
    transition: {
      repeat: Infinity,
    },
  },
};

const navVariants = {
  top: {
    backgroundColor: "rgba(0, 0, 0, 0)",//white
  },
  scroll: {
    backgroundColor: "rgba(0, 0, 0, 1)",//black
  },
};

function Header() {
  const [searchOpen, setSearchOpen] = useState(false);
  const homeMatch = useRouteMatch("/");
  const tvMatch = useRouteMatch("/tv");
  const inputAnimation = useAnimation();
  const navAnimation = useAnimation();
  const { scrollY } = useScroll();
  // 높이가 밑에서부터 얼마나 떨어져있는지
  const toggleSearch = () => {
    if (searchOpen) {
      inputAnimation.start({
        scaleX: 0,
      });
    } else {
      inputAnimation.start({ scaleX: 1 });
    }
    setSearchOpen((prev) => !prev);
  };
  useEffect(() => {
    scrollY.onChange(() => {
      if (scrollY.get() > 80) {
        navAnimation.start("scroll");
      } else {
        navAnimation.start("top");
      }

    });
  }, [scrollY, navAnimation]);
  return (
    <Nav variants={navVariants} animate={navAnimation} initial={"top"}>
      <Col>
        <Logo
          variants={logoVariants}
          whileHover="active"
          animate="normal"
          xmlns="http://www.w3.org/2000/svg"
          width="1024"
          height="276.742"
          viewBox="0 0 1024 276.742"
        >
          <motion.path d="M140.803 258.904c-15.404 2.705-31.079 3.516-47.294 5.676l-49.458-144.856v151.073c-15.404 1.621-29.457 3.783-44.051 5.945v-276.742h41.08l56.212 157.021v-157.021h43.511v258.904zm85.131-157.558c16.757 0 42.431-.811 57.835-.811v43.24c-19.189 0-41.619 0-57.835.811v64.322c25.405-1.621 50.809-3.785 76.482-4.596v41.617l-119.724 9.461v-255.39h119.724v43.241h-76.482v58.105zm237.284-58.104h-44.862v198.908c-14.594 0-29.188 0-43.239.539v-199.447h-44.862v-43.242h132.965l-.002 43.242zm70.266 55.132h59.187v43.24h-59.187v98.104h-42.433v-239.718h120.808v43.241h-78.375v55.133zm148.641 103.507c24.594.539 49.456 2.434 73.51 3.783v42.701c-38.646-2.434-77.293-4.863-116.75-5.676v-242.689h43.24v201.881zm109.994 49.457c13.783.812 28.377 1.623 42.43 3.242v-254.58h-42.43v251.338zm231.881-251.338l-54.863 131.615 54.863 145.127c-16.217-2.162-32.432-5.135-48.648-7.838l-31.078-79.994-31.617 73.51c-15.678-2.705-30.812-3.516-46.484-5.678l55.672-126.75-50.269-129.992h46.482l28.377 72.699 30.27-72.699h47.295z" />
        </Logo>
        <Items>
          <Item>
            <Link to="/">
              Home {homeMatch?.isExact && <Circle layoutId="circle" />}
            </Link>
          </Item>
          <Item>
            <Link to="/tv">
              Tv Shows {tvMatch && <Circle layoutId="circle" />}
            </Link>
          </Item>
        </Items>
      </Col>
      <Col>
        <Search>
          <motion.svg
            onClick={toggleSearch}
            animate={{ x: searchOpen ? -185 : 0 }}
            transition={{ type: "linear" }}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            ></path>
          </motion.svg>
          <Input
            animate={inputAnimation}
            initial={{ scaleX: 0 }}
            transition={{ type: "linear" }}
            placeholder="Search for movie or tv show..."
          />
        </Search>
      </Col>
    </Nav>
  );
}

export default Header;