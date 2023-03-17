import "./global.css";
import s from "./style.module.css";
export function App(){
    return (
    <div className={s.main_container}>
        <div className={s.header}>header</div>
        <div className={s.tv_show_detail}>tv_show_detail</div>
        <div className={s.recommendations}>recommendations</div>
    </div>
    );
}