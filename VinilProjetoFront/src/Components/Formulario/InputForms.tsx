import { useState } from "react";
import { Fragment } from "react/jsx-runtime";

interface InputFormsProps {
    Label?: string[];
    QuantiaElementoLinha?: number;
    dadosState?: any[];
    setDadosState?: any;
    typeInput: string[]
}

export function InputForms(props: InputFormsProps) {
    const [getValue, setValue] = useState(props.dadosState || []);

    function getTarget(e: React.ChangeEvent<HTMLInputElement>, key: number) {
        const newValues = [...getValue];
        newValues[key] = e.target.value;
        setValue(newValues);
        props.setDadosState?.(newValues);
    }

    return (
        <div style={{
            display: "grid",
            gridTemplateColumns: `repeat(${props.QuantiaElementoLinha ?? 2}, 1fr)`,
            gap: "10px",
            width: "100%",
        }}>
            {props.Label?.map((item, key) => (
                <Fragment key={key}>
                    <div style={{ display: "flex" }}>
                        <p style={{ margin: "3px 20px 0px 0px" }}>{item}:</p>
                        <input
                            style={{
                                width: "80%",
                                borderRadius: "4px",
                                height: "20px",
                                border: "1px solid rgb(220, 220, 220)"
                            }}
                            placeholder={`${item}...`}
                            type={props.typeInput?.[key] ?? 'text'}
                            value={getValue[key] !== null && getValue[key] !== undefined ? getValue[key] : ''}
                            onChange={(e) => getTarget(e, key)}
                        />
                    </div>
                </Fragment>
            ))}
        </div>
    );
}
