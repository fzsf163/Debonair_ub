import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import { useState } from 'react';
import { Typography } from '@mui/material';

export default function HomeTabs () {
    const [ value, setValue ] = useState( 1 );

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
                        <Typography>{ children }</Typography>
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
                centerRipple
                textColor='secondary'
                indicatorColor='secondary'
            >
                <Tab sx={ {
                    width: '100%',
                    color: 'GrayText',
                    fontWeight: 900
                } }
                    value={ 1 } label="Admin Users" />
                <Tab sx={ {
                    width: '100%',
                    color: 'GrayText',
                    fontWeight: 900
                } }
                    value={ 2 } label="Employee Users" />
            </Tabs>
            <Box>
                <TabPanel value={ value } index={ 1 }>
                    <h1>Hello</h1>
                </TabPanel>
                <TabPanel value={ value } index={ 2 }>
                    <h2>YOOO</h2>
                </TabPanel>
            </Box>
        </Box>
    );
}