import React, {Components} from 'react';
import './css/block.css';

class Block extends React.Component{
    render(){
        return <div className={'block col-6 mt-5'}>
            <a className={'col-12 content p-0'} style={{backgroundImage: 'url(' + this.props.image + ')'}} href={this.props.url} target='_blank'>

                <div className={'col-12 hidden-content'}>
                    <div className={'background'}></div>
                    <div className={'text'}>

                        <div className={'row'}>
                            <div className={'col-12 name mt-4 mb-4'}>
                                {this.props.name}
                            </div>
                        </div>

                        <div className={'row'}>
                            <div className={'col-12 description ml-2'}>
                                {this.props.description}
                            </div>
                        </div>

                    </div>
                </div>

            </a>
        </div>
    }
}

export default Block;