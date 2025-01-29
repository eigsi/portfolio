import { useState } from "react";
import "/src/assets/css/FloatingLabel.css"; // Ajoute les styles CSS ici

interface FloatingLabelInputProps {
    label: string;
    type?: string;
    name: string;
    isTextarea?: boolean;
}

function FloatingLabelInput({ label, type = "text", name, isTextarea }: FloatingLabelInputProps) {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <div className="input-container">
            <label className={isFocused ? "focused" : ""} htmlFor={name}>
                {label}
            </label>
            {isTextarea ? (
                <textarea
                    id={name}
                    name={name}
                    placeholder=" "
                    rows={5}
                    onFocus={() => setIsFocused(true)}
                    onBlur={(e) => setIsFocused(e.target.value !== "")} // Garde le label en haut si l'input n'est pas vide
                    required
                />
            ) : (
                <input
                    type={type}
                    id={name}
                    name={name}
                    placeholder=" "
                    onFocus={() => setIsFocused(true)}
                    onBlur={(e) => setIsFocused(e.target.value !== "")}
                    required
                />
            )}
        </div>
    );
}

export default FloatingLabelInput;
