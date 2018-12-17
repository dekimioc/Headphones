import React, { Component } from 'react';
import styles from "./Item.module.css";
import { FaBars, FaSearch, FaWeightHanging, FaStar, FaHeart, FaCircle, FaTimesCircle } from "react-icons/fa";
import headphone from '../../images/headphones_2.png';
import headphoneSmall1 from '../../images/headphones_5_small.png';
import headphoneSmall2 from '../../images/headphones_2_small.png';
import headphoneBig2 from '../../images/headphones_2_big.png';
import headphoneSmall3 from '../../images/headphones_3_small.png';
import headphoneBig3 from '../../images/headphones_3_big.png';
import headphoneSmall4 from '../../images/headphones_4_small.png';
import headphoneBig4 from '../../images/headphones_4_big.png';
import headphoneSmall5 from '../../images/headphones_1_small.png';
import headphoneBig5 from '../../images/headphones_1_big.png';

class Item extends Component {
    state = {
        bigImage: headphone
    }

    image1ChangeHandler = () => {
        this.setState({bigImage: headphone})
    }

    image2ChangeHandler = () => {
        this.setState({bigImage: headphoneBig2})
    }

    image3ChangeHandler = () => {
        this.setState({bigImage: headphoneBig3})
    }

    image4ChangeHandler = () => {
        this.setState({bigImage: headphoneBig4})
    }

    image5ChangeHandler = () => {
        this.setState({bigImage: headphoneBig5});
    }
    render() {
        return(
            <div className={styles.Item}>
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
                                    <li><FaTimesCircle onClick={this.props.show} className={styles.closeButton}/></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.innerContainer}>
                        <div className={styles.leftSide}>
                            <h1 className={styles.leftSideHeading}>Beats solo3 wireles</h1>
                            <div className={styles.stars}>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            <p className={styles.leftSidePara}>With up to 40 hours of battery life, Beats Solo 3 Wirelles is your perfect everyday
                                headphone. Get the most of your music with an award-wining, emotionally charged Beats
                                listening experience.
                            </p>
                            <select>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                            <select>
                                <option></option>
                            </select>
                            <div className={styles.buttonDiv}>
                                <p className={styles.buttonAlign}>
                                    <span>
                                        <button className={styles.leftSideButton}>Add to cart</button>
                                    </span>
                                    <span>
                                        <FaHeart className={styles.heart}/>
                                    </span>
                                </p>
                            </div>
                            <span className={styles.span}></span>
                            <p className={styles.buying}>Get help buying. Chat now</p>
                        </div>
                        <div className={styles.rightSide}>
                            <picture >
                                <img src={this.state.bigImage} alt="headphones" style={{margin: "0 auto", display: "block", width: "420px", height: "440px"}}/>
                            </picture>
                            <div className={styles.smallImages}>
                                <img 
                                    src={headphoneSmall1}
                                    className={styles.image}
                                    onMouseEnter={this.image1ChangeHandler}
                                    alt="headphones"/>

                                <img 
                                    src={headphoneSmall2}
                                    className={styles.image}
                                    onMouseEnter={this.image2ChangeHandler}
                                    alt="headphones"/>
                                <img 
                                    src={headphoneSmall3}
                                    className={styles.image}
                                    onMouseEnter={this.image3ChangeHandler}
                                    alt="headphones"/>
                                <img 
                                    src={headphoneSmall4}
                                    className={styles.image}
                                    onMouseEnter={this.image4ChangeHandler}
                                    alt="headphones"/>
                                <img 
                                    src={headphoneSmall5}
                                    className={styles.image}
                                    onMouseEnter={this.image5ChangeHandler}
                                    alt="headphones"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Item;