import * as React from 'react';
import Scrollbars from 'react-custom-scrollbars';

export class Scrollbar extends React.Component {
    private renderThumbVertical ({style, ...props}: any) {
        const customStyles = {
            backgroundColor: 'black'
        }
        return (
            <div {...props} style={{...style, ...customStyles}}></div>
        );
    }
    private renderView ({style, ...props}: any) {
        const customStyles = {
            height: 'calc(100% + 17px)',
            maxHeight: 'calc(100% + 17px)'
        }
        return (
            <div {...props} style={{...style, ...customStyles}}></div>
        );
    }
    render() {
        return (
            <Scrollbars
                {...this.props}
                style={{
                    height: '100%',
                    maxHeight: '100%',
                    backgroundColor: 'blue'
                }}
                autoHeight
                // renderTrackHorizontal={this.renderTrackHorizontal}
                // renderTrackVertical={this.renderTrackVertical}
                // renderThumbHorizontal={this.renderThumbHorizontal}
                renderThumbVertical={this.renderThumbVertical}
                renderView={this.renderView}
                />            
        );
    }
}