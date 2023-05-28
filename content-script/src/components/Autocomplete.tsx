
import React, { useRef } from 'react';
import { InputHTMLAttributes, useState } from "react";
import { AutoComplete } from "primereact/autocomplete";
import "primereact/resources/primereact.min.css";
import { SpeedDial } from 'primereact/speeddial';
import { Toast } from 'primereact/toast';


export default function BasicDemo() {
    const [value, setValue] = useState('');
    const [items, setItems] = useState<string[]>([]);

    const toast = useRef(null);
    const itemsDial = [
        {
            label: 'Add',
            icon: 'pi pi-pencil',
            command: () => {
                toast.current.show({ severity: 'info', summary: 'Add', detail: 'Data Added' });
            }
        },
        {
            label: 'Update',
            icon: 'pi pi-refresh',
            command: () => {
                toast.current.show({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
            }
        },
        {
            label: 'Delete',
            icon: 'pi pi-trash',
            command: () => {
                toast.current.show({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
            }
        },
        {
            label: 'React Website',
            icon: 'pi pi-external-link',
            command: () => {
                window.location.href = 'https://facebook.github.io/react/';
            }
        }
    ];


    const search = (event: any) => {
        setItems([...Array(10).keys()].map(item => event.query + '-' + item));
    }

    return (
        <div className="card flex justify-content-center">
            <AutoComplete value={value} suggestions={items} completeMethod={search} onChange={(e) => setValue(e.value)} />
            <SpeedDial model={itemsDial} radius={80} type="semi-circle" direction="right" style={{ top: 'calc(50% - 2rem)', left: 0 }} />

        </div>
    )
}