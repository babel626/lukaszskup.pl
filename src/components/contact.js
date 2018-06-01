import React, {Component} from 'react';
import './css/contact.css';

class Contact extends React.Component {
    render() {
        return <div className={'contact'}>
            <h1>I'm now <span className={'available-span'}>available</span> for freelance work, don't hesitate to <a
                className={'contactme-link'} href={'mailto:marbleeco@gmail.com'}>contact me</a></h1>

            <div className={'row social'}>
                {/*<div className={'col-2'}>*/}
                    {/*<a href='' target='_blank'>*/}
                        {/*<i className="fa fa-linkedin fa-fw"></i>*/}
                    {/*</a>*/}
                {/*</div>*/}

                <div className={'col-3'}>
                    <a href='https://www.facebook.com/skupello' target='_blank'>
                        <i className="fa fa-facebook-official fa-fw"></i>
                    </a>
                </div>

                <div className={'col-3'}>
                    <a href='https://twitter.com/DubrovskyAndy' target='_blank'>
                        <i className="fa fa-twitter fa-fw"></i>
                    </a>
                </div>

                <div className={'col-3'}>
                    <a href='https://www.instagram.com/lukaszskup_/' target='_blank'>
                        <i className="fa fa-instagram fa-fw"></i>
                    </a>
                </div>

                <div className={'col-3'}>
                    <a href='https://github.com/lukaszskup' target='_blank'>
                        <i className="fa fa-github fa-fw"></i>
                    </a>
                </div>

                {/*<div className={'col-2'}>*/}
                    {/*<a href='' target='_blank'>*/}
                        {/*<i className="fa fa-stack-overflow fa-fw"></i>*/}
                    {/*</a>*/}
                {/*</div>*/}
            </div>


        </div>
    }
}

export default Contact;