import { useMemo } from 'react';
import { MaterialReactTable, type MRT_ColumnDef } from 'material-react-table';

type UserDataProps = {
    districeID: number,
    district: string,
    disvision: string,
    divisionId: number,
    empID: number,
    employeeType: string,
    firstName: string,
    lastName: string
}

type Props = {
    onlyEmployee: [],
}

const EmployeeTable = ( { onlyEmployee }: Props ) => {

    // console.log( users );


    const columns = useMemo<MRT_ColumnDef<UserDataProps>[]>(
        //column definitions...
        () => [
            {
                accessorKey: 'empID',
                header: 'ID',
            },
            {
                accessorKey: 'firstName',
                header: 'First Name',
            },
            {
                accessorKey: 'lastName',
                header: 'Last Name',
            },
            {
                accessorKey: 'employeeType',
                header: 'Role',
            },
            {
                accessorKey: 'districeID',
                header: 'District ID',
            },
            {
                accessorKey: 'district',
                header: 'District',
            },
            {
                accessorKey: 'disvision',
                header: 'Division',
            },
            {
                accessorKey: 'divisionId',
                header: 'Division ID',
            },

        ],
        [],
        //end
    );

    return (
        <MaterialReactTable
            columns={ columns }
            data={ onlyEmployee }
            enableGlobalFilterModes
            enableRowNumbers
            enableStickyHeader
            enableSorting

            initialState={ {
                showGlobalFilter: true,
            } }
            positionGlobalFilter="right"
            muiSearchTextFieldProps={ {
                placeholder: `Search Employee Users`,
                sx: { minWidth: '300px', backgroundColor: "rgb(2, 19, 51)", borderRadius: 5, "::placeholder": { color: "cornsilk" }, "input": { color: "white" } },
                variant: 'outlined',
            } }

            muiTopToolbarProps={ {
                sx: {
                    backgroundColor: "rgb(2, 19, 51)",
                    "svg": {
                        color: "white"
                    }
                }
            } }
            muiBottomToolbarProps={ {
                sx: {
                    backgroundColor: "rgb(2, 19, 51)",
                    "svg": {
                        color: "white"
                    }
                }
            } }
            muiTablePaginationProps={ {
                sx: {
                    color: 'cornsilk',
                    ".MuiMenu-paper": {
                        backgroundColor: "rgb(2, 19, 51)"
                    }
                }
            } }
            muiTableBodyCellProps={ {
                sx: {
                    backgroundColor: "rgb(2, 19, 51)",
                    color: "cornsilk",
                }
            } }

            muiTableHeadCellProps={ {
                sx: {
                    backgroundColor: "rgb(2, 19, 51)",
                    color: "cornsilk",
                }
            } }

            muiTableBodyRowProps={ {
                hover: false,
            } }
        />
    );
};

export default EmployeeTable;
