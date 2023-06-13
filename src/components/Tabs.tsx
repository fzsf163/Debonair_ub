import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useState } from 'react';
import AdminUsers from './AdminUsers';
import EmployeeUsers from './EmployeeUsers';
import GroupIcon from '@mui/icons-material/Group';

export default function HomeTabs () {

    const [ value, setValue ] = useState<number>( 1 );

    const handleChange = ( _event: React.SyntheticEvent, newValue: number ) => {
        setValue( newValue );
    };


    interface TabPanelProps {
        children?: React.ReactNode;
        index: number;
        value: number;
    }

    function TabPanel ( props: TabPanelProps ) {
        const { children, value, index, ...other } = props;

        return (
            <div
                role="tabpanel"
                hidden={ value !== index }
                id={ `tabpanel-${ index }` }
                aria-labelledby={ `tab-${ index }` }
                { ...other }
            >
                { value === index && (
                    <Box sx={ { p: 1 } }>
                        { children }
                    </Box>
                ) }
            </div>
        );
    }
    return (
        <Box sx={ { width: '100%' } }>
            <Tabs
                value={ value }
                onChange={ handleChange }
                aria-label="secondary tabs example"
                centered
                // centerRipple={ true }
                selectionFollowsFocus={ true }
                TabIndicatorProps={
                    {
                        sx: {
                            backgroundColor: "yellow"
                        }
                    }
                }
                sx={ {
                    ".Mui-selected": {
                        color: `orange`,
                    }
                } }

            >
                <Tab

                    sx={ {
                        width: '100%',
                        color: 'GrayText',
                        fontWeight: 900
                    } }
                    value={ 1 }
                    label="Admin Users "
                    icon={ <GroupIcon></GroupIcon> }
                    iconPosition='end'
                />
                <Tab sx={ {
                    width: '100%',
                    color: 'GrayText',
                    fontWeight: 900,
                } }
                    value={ 2 }
                    label="Employee Users"
                    icon={ <GroupIcon></GroupIcon> }
                    iconPosition='end'

                />
            </Tabs>
            <Box>
                <TabPanel value={ value } index={ 1 } >
                    <AdminUsers></AdminUsers>
                </TabPanel>
                <TabPanel value={ value } index={ 2 }>
                    <EmployeeUsers></EmployeeUsers>
                </TabPanel>
            </Box>
        </Box >
    );
}