import {useEffect} from 'react';
import {useLocalStorage } from './useLocalStorage';

export const useDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage('key')
    useEffect(()=> {
        const page = window.document.body
        const divbox = document.querySelectorAll('.project')
        const text = document.querySelectorAll('.textcolor')
        const divbox2 = document.querySelectorAll('.projectUnreal')
        
        
        if(darkMode === true){
            page.classList.add('dark-mode')
            // page2.style.backgroundColor = 'red'
            for (var i = 0; i < divbox.length; i++) {
                divbox [i].style.backgroundColor = "gray"};

            for (var i = 0; i < divbox2.length; i++) {
                divbox2 [i].style.backgroundColor = "gray"};

            for (var i = 0; i < text.length; i++) {
                text [i].style.color = "black"};

        }else{
            page.classList.remove('dark-mode') 
            for (var i = 0; i < divbox .length; i++) {
                divbox [i].style.backgroundColor = "black"};

            for (var i = 0; i < divbox2.length; i++) {
                divbox2 [i].style.backgroundColor = "black"};

            for (var i = 0; i < text.length; i++) {
                text [i].style.color = "white"};    
        }


    })

    return [darkMode, setDarkMode];
}