import React, { Component } from 'react';
import styles from './Colors.modules.css';
import {FaAngleRight, FaCircle} from 'react-icons/fa';




class Colors extends Component {
    state = {

        colorList: [
            {color: "Gloss Black"},
            {color: "Rose Gold"},
            {color: "Gold"},
            {color: "Ultra Violet"},
            {color: "Gloss White"},
            {color: "Black"},
            {color: "Silver"},
            {color: "Red"}
        ]
    }

    render() {
        let style = {
            color: "red",
            listStyleType: "none"
        }
        let Table = this.state.colorList.map(color => {
            return <li 
                    style={style} 
                    key={color.color}><FaCircle />{color.color}</li>
           
        })
        return (
            <div className={styles.Colors}>
                <div className={styles.container}>
                    <div className={styles.leftSide}>
                        <p>Featured</p>
                        <h1>Available colors</h1>
                        <p>
                            <span>
                                Full cataloge
                            </span>
                            <span><FaAngleRight /></span>
                        </p>
                        <div className={styles.listDiv}>
                            <ul className={styles.ulList}>
                                {Table}
                            </ul>
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
        )
    }
};

export default Colors;