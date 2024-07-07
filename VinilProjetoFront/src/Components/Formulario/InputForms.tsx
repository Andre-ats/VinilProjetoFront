import { useState } from "react";
import { Fragment } from "react/jsx-runtime";

interface InputFormsProps {
    Label?: string[];
    QuantiaElementoLinha?: number;
    dadosState?: any[];
    setDadosState?: any;
    typeInput?: string[];
    Enum?: any;
}

export function InputForms(props: InputFormsProps) {
    const [getValue, setValue] = useState(props.dadosState || []);

    function getTarget(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>, key: number) {
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
                        <label style={{ margin: "3px 20px 0px 0px", width:"210px" }}>{item}:</label>
                        {props.typeInput && props.typeInput[key] === "Enum" && props.Enum && (
                            <select
                                style={{
                                    width: "80%",
                                    borderRadius: "4px",
                                    height: "20px",
                                    border: "1px solid rgb(220, 220, 220)"
                                }}
                                value={getValue[key] !== null && getValue[key] !== undefined ? getValue[key] : ''}
                                onChange={(e) => getTarget(e, key)}
                            >
                                <option value="" disabled>Selecione uma opção...</option>
                                {Object.keys(props.Enum[key])
                                    .filter(enumKey => isNaN(Number(enumKey)))
                                    .map((enumItem, index) => (
                                        <option key={index} value={enumItem}>{enumItem}</option>
                                    ))}
                            </select>
                        )}
                        {(!props.typeInput || props.typeInput[key] !== "Enum") && (
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
                        )}
                    </div>
                </Fragment>
            ))}
        </div>
    );
}
