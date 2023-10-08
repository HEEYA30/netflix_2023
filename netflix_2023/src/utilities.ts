// 이미지를 받아솨서 형식과 ID넣어주는 Helpter Function이 들어감

export function makeImagePath(id: string, format?:string){
// format형식을 잘 모르겠으면 string으로 주겠단 뜻
    return `http://image.tmdb.org/t/p/${format?format:"original"}/${id}`;
            // format을 받아오면 format사용, 없으면 원본사용한단 뜻

};

