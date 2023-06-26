import {useEffect, useContext} from "react";
import { DataContext } from "../../context/DataContext";

export const BtnLogout = ({navigation}) => {

    const { setDadosUsuario } = useContext(DataContext);

    return(
        useEffect(() => {
            setDadosUsuario('')
            navigation.navigate('login')
        }, [])
    )
}