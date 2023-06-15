import DenseAppBar from "../components/AppBar";
import { Outlet } from 'react-router-dom';

export default function Home () {

    return (
        <div>
            <DenseAppBar></DenseAppBar>
            <Outlet></Outlet>
        </div>
    )
}
