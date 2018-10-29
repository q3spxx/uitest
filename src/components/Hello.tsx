import * as React from "react";
import { MuiThemeProvider, Input as MuiInput, Select as MuiSelect, createMuiTheme, withStyles } from "@material-ui/core";
import { Select } from "./Select";
import { MultiSelect } from "./MultiSelect";
import { Input } from "./Input";
import { SelectV2 } from "./SelectV2";

const theme = createMuiTheme({
    props: {
        MuiButton: {
            disableRipple: true,
        }
    },
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
                    padding: 6,
                    minHeight: 'auto',
                    minWidth: 400,
                    height: 32,
                    justifyContent: 'left',
                    fontSize: 12,
                    lineHeight: '18px',

                    '&:hover': {
                        backgroundColor: '#FFF',
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
        },
        MuiInputBase: {
            input: {
                padding: 6,
                fontSize: 12,
                lineHeight: '18px',
                width: 360,
                '&.flexible': {
                    width: '100%',
                }
            },
        },
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
interface Props {};
interface State {
    value: any;
    value2: any;
    bindLabel: string;
    inputValue: string;
}

export class Hello extends React.Component<Props, State> {
    state = {
        value: options[0],
        value2: options[0],
        bindLabel: 'label',
        inputValue: '',
    }
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <div>
                    <Select
                        label='Numeric'
                        placeholder="placeholder"
                        bindLabel={this.state.bindLabel}
                        bindValue='value'
                        value={this.state.value}
                        options={options}
                        onChange={(value:any) => {
                            this.setState({value: value});
                        }}
                        />
                </div>
                <div>
                    <SelectV2
                        label='Numeric'
                        placeholder="placeholder"
                        bindLabel={this.state.bindLabel}
                        bindValue='value'
                        value={this.state.value2}
                        options={options}
                        onChange={(value:any) => {
                            this.setState({value2: value});
                        }}
                        />
                </div>
            </MuiThemeProvider>
        );
    }
};