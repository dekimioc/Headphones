import React, { Component} from 'react';
import styles from './Header.module.css';
import { FaBars, FaSearch, FaWeightHanging, FaChevronRight, FaArrowRight } from 'react-icons/fa';
import headphones2 from "../../images/headphones_2.png";
import headphones3 from '../../images/headphones_3.png';
import Item from "../Item/Item";
import List from '../../components/List/List';

class Header extends Component {
    state = {
        showItem: false,
        list: [
           1,2,3,4,5
        ]
    }

 itemHandler = () => {
     let itemState = !this.state.showItem
     this.setState({showItem: itemState})
 }

    render() {
        let numbers = this.state.list.map(liseEl => <li className={styles.lifeStyle}>{liseEl}</li>)
        let item = null;
        if (this.state.showItem) {
            item = <Item show={this.itemHandler}/>
        } else {
            item =null;
        }
        return(
            <div className={styles.Header}>
                <div className={styles.container}>
                    <div className={styles.navBar}>
                        <ul className={styles.ul}>
                            <li>
                                <ul className={styles.ul}>
                                    <li>
                                        <FaBars className={styles.bars}/>
                                    </li>
                                    <li>Menu</li>
                                </ul>
                            </li>
                            <li>Global shop</li>
                            <li>
                                <ul>
                                    <li><FaSearch className={styles.search}/></li>
                                    <li><FaWeightHanging className={styles.weight}/></li>
                                    <li className={styles.en}>EN</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                        <div className={styles.innerContainer}>
                            <p className={styles.prevDiv}>
                                <span className={styles.spanPrev}>PREV</span>
                                <span><FaArrowRight className={styles.prevArrow}/></span>
                            </p>
                            <p className={styles.nextDiv}>
                                <span className={styles.spanNext}>NEXT</span>
                                <span><FaArrowRight className={styles.nextArrow} /></span>
                            </p>
                        <div  className={styles.main}>
                            <div className={styles.leftSide}>
                        <div className={styles.textSection}>
                            <p className={styles.subHeading}>Technique</p>
                            <h1 className={styles.heading}>Got no strings</h1>
                            <p className={styles.paraSection}>Get the most out of your music with an award-winning, emotionally charged Beats listening experience.</p>
                            <p className={styles.buttonSection}>
                                <span>
                                    <button 
                                        className={styles.showButton}
                                        onClick={this.itemHandler}>
                                        Show item
                                    </button>
                                </span>
                                <span>
                                    <FaChevronRight 
                                        className={styles.chevronRight}/>
                                </span>
                            </p>
                        </div>
                        <div className={styles.videoSection}>
                            <video width="170px" height="115" controls className={styles.video1}>
                                <source src="https://www.youtube.com/watch?v=GF-ZSOG3Sck" />
                            </video>
                            <video width="170px" height="115" controls className={styles.video2}>
                            <source src="https://www.youtube.com/watch?v=TLvpUvNtXS8" />
                            </video>
                        </div>
                        </div>
                        <div className={styles.headphones}>
                            <picture>
                                <source media="(max-width: 830px)" srcSet={headphones3} />
                                <img src={headphones2} style={{margin: "0 auto", display: "block"}} alt="dr dre headphones" />
                            </picture>
                        </div>
                        
                    </div>
                    <div className={styles.numbers}>
                        <ul className={styles.leftSide}>
                            {numbers}
                        </ul>
                        </div>
                    </div>
                    
                </div>
                {item}
            </div>
           
        )
    }
}

export default Header;