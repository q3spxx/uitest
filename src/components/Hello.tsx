import * as React from "react";
import { MuiThemeProvider, createMuiTheme, withStyles } from "@material-ui/core";
import { MySelect } from "./MySelect";

const theme = createMuiTheme({
    overrides: {
        MuiPaper: {
            root: {
                '&.select': {
                    position: 'absolute',
                    marginTop: 6,
                    width: '100%',
                    zIndex: 1,
                    maxHeight: 200,
                    overflow: 'auto',
                    '&.error': {
                        marginTop: -12
                    }
                }
            },
            elevation2: {
                boxShadow: '0 0 1px rgba(0,0,0,.5)',
            },
        },
        MuiButton: {
            root: {
                '&.select': {
                    textTransform: 'none',
                    padding: 5,
                    minHeight: 'auto',
                    minWidth: 400,
                    justifyContent: 'left',

                    '&:hover': {
                        backgroundColor: 'white',
                    }
                }
            }
        },
        MuiMenuItem: {
            root: {
                fontSize: 14,
                paddingTop: 5,
                paddingBottom: 5,
                paddingLeft: 5,
                paddingRight: 5,
                '&.select-item': {
                    height: 'initial',
                    whiteSpace: 'normal',
                    overflow: 'initial'
                }
            }
        },
        MuiInput: {
            root: {
                border: "1px solid #AAAAAA",
                borderRadius: 3,
                color: "black"
            },
            formControl: {
                'label + &': {
                  marginTop: 0
                }
            },
            error: {
                border: "1px solid red"
            },
            disabled: {
                backgroundColor: '#ddd',
            }
        },
        MuiInputLabel: {
            root: {
                fontSize: 14,
                fontWeight: 600,
                marginBottom: 6
            },
            formControl: {
                position: "initial"
            }
        },
        MuiFormHelperText: {
            root: {
                fontSize: 12,
                marginTop: 6,
            },
        },
        MuiFormLabel: {
            root: {
                color: "black",
                '&$error': {
                  color: "black"
                }
            }
        },
        MuiSvgIcon: {
            root: {
                '&.select-arrow': {
                    position: 'absolute',
                    right: 0
                }
            }
        }
    }
});

const options = [
    {
        value: 10,
        label: 'Ten',
    },
    {
        value: 9,
        label: 'Nine',
    },
    {
        value: 8,
        label: 'Eight',
    },
    {
        value: 7,
        label: 'Seven',
    },
    {
        value: 6,
        label: 'Six',
    }
];
const options4 = [
    {
        label: 10,
        value: 'Ten',
    },
    {
        label: 9,
        value: 'Nine',
    },
    {
        label: 8,
        value: 'Eight',
    },
    {
        label: 7,
        value: 'Seven',
    },
    {
        label: 6,
        value: 'Six',
    }
];

const options5 = ['Ten', 'Nine', 'Eight', 'Seven', 'Six'];

const options3 = [
    { value: 'chocolate', label: 'Chocolate', description: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."'},
    { value: 'strawberry', label: 'Strawberry', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { value: 'vanilla', label: 'Vanilla', description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
    { value: 'chocolate', label: 'Chocolate', description: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."'},
    { value: 'strawberry', label: 'Strawberry', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { value: 'vanilla', label: 'Vanilla', description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
  ]
const options2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const style = {
    container: {
        width: '100%',
    },
    title: {
        fontSize: 12,
        fontWeight: 700,
    },
    description: {
        fontSize: 12,
    }
};

interface Option3 {
    value: string,
    label: string,
    description: string,
}

interface Style {
    classes: {
        container: string,
        title: string,
        description: string,
    }
}

const Template = (props: Option3 & Style) => {
    return (
        <div className={props.classes.container}>
            <div className={props.classes.title}>{props.label}</div>
            <div className={props.classes.description}>{props.description}</div>
        </div>
    );
};

const template = withStyles(style)(Template);

const errorMessage = 'Error message';

export class Hello extends React.Component {
    state = {
        value: options[0],
        value2: options2[0],
        value3: options3[0],
        value4: options4[0],
        value5: options5[0],
        error: true
    }
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <MySelect label='Numeric' onChange={(value:any) => this.setState({value2: value})} value={this.state.value2} options={options2} />
                <MySelect label='Numeric' onChange={(value:any) => this.setState({value5: value})} value={this.state.value5} options={options5} />
                <MySelect label='Error' errorMessage={errorMessage} error={this.state.error} onChange={(value:any) => this.setState({value2: value, error: false})} value={this.state.value2} options={options2} />
                <MySelect bindValue='value' bindLabel='label' onChange={(value:any) => this.setState({value: value})} value={this.state.value} options={options} />
                <MySelect bindValue='value' bindLabel='label' onChange={(value:any) => this.setState({value4: value})} value={this.state.value4} options={options4} />
                <MySelect label='Template' bindLabel='label' template={template} onChange={(value:any) => this.setState({value3: value})} value={this.state.value3} options={options3} />
            </MuiThemeProvider>
        );
    }
};