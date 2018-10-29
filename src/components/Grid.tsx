import * as React from "react";

let widgets = [
    {
        min: 8,
        max: 8,
    },
    {
        min: 3,
        max: 6,
    },
    {
        min: 2,
        max: 6,
    },
    {
        min: 2,
        max: 6,
    },
    {
        min: 6,
        max: 12,
    },
];

let widgetsWithScale;

export class Grid extends React.Component {

    render() {

        widgetsWithScale = widgets.map((widget) => {
            return {
                ...widget,
                scale: widget.max / widget.min,
            }
        });

        let counter = 0;
        let widgetsOnRow = 0;
        const rows: any = [];
    
        widgetsWithScale.forEach((widget) => {
            let nextCounter = counter + widget.min;
            if (nextCounter > 12) {
                rows.push({
                    count: counter,
                    widgetsOnRow: widgetsOnRow,
                });
                counter = widget.min;
                widgetsOnRow = 1;
            } else if (nextCounter == 12) {
                rows.push({
                    count: counter,
                    widgetsOnRow: widgetsOnRow,
                });
                counter = 0;
                widgetsOnRow = 0;

            } else {
                counter += widget.min;
                widgetsOnRow ++;
            }
        });

        if (counter > 0) {
            rows.push({
                count: counter,
                widgetsOnRow: widgetsOnRow,
            });
        }

        console.log(rows);

        const widgetsForDisplay: any = [];

        rows.forEach((row: any) => {
            const rowWithWidgets = widgets.splice(0, row.widgetsOnRow);
            let remainder = 12;
            let widgetsRemain = row.widgetsOnRow;
            let place = 12 / row.widgetsOnRow;
            rowWithWidgets.forEach((widget: any) => {
                let scale = 1;
                if (place > widget.min) {
                    scale = (remainder / widgetsRemain) / widget.min;
                }
                let widgetWidth = Math.round(widget.min * scale);
                remainder -= widgetWidth;
                widgetsRemain--;
                widgetsForDisplay.push({
                    col: widgetWidth,
                })
            });
        });

        console.log(widgetsForDisplay);

        return(
            <div style={{width: 600, display: 'flex', flexWrap: 'wrap'}}>
                {widgetsForDisplay.map((widget: any, i: any) => {
                    const color = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
                    return (
                        <div key={i} style={{height: 100, width: 50 * widget.col, backgroundColor: color}}></div>
                    );
                })}
            </div>
        );
    }
}
