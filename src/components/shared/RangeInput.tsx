import { Range, getTrackBackground } from 'react-range';

import { colors } from '../../styles/colors'

interface Props {
    step: number,
    rangeMin: number,
    rangeMax: number,
    values: number[],
    setValues: (arg: number[]) => void,
    setFinalValues: (arg: number[]) => void,
    toFixed?: number,
    units?: string
}

const TwoThumbs: React.FC<Props> = ({
    step,
    rangeMin,
    rangeMax,
    values,
    setValues,
    setFinalValues,
    toFixed,
    units
}) => {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
                paddingLeft: "2px",
                paddingRight: "24px"
            }}
        >
            <Range
                values={values}
                step={step}
                min={rangeMin}
                max={rangeMax}
                onChange={(values) => setValues(values)}
                onFinalChange={(values) => setFinalValues(values)}
                renderTrack={({ props, children }) => (
                    <div
                        onMouseDown={props.onMouseDown}
                        onTouchStart={props.onTouchStart}
                        style={{
                            ...props.style,
                            height: '36px',
                            display: 'flex',
                            width: '100%'
                        }}
                    >
                        <div
                            ref={props.ref}
                            style={{
                                height: '5px',
                                width: '100%',
                                borderRadius: '4px',
                                background: getTrackBackground({
                                    values,
                                    colors: ['#ccc', '#548BF4', '#ccc'],
                                    min: rangeMin,
                                    max: rangeMax,
                                }),
                                alignSelf: 'center'
                            }}
                        >
                            {children}
                        </div>
                    </div>
                )}
                renderThumb={({ props }) => {

                    return (
                        <div
                            {...props}
                            style={{
                                ...props.style,
                                width: '15px',
                                height: '15px',
                                borderRadius: '15px',
                                backgroundColor: colors.lightBlue,
                                // boxShadow: '0px 2px 6px #AAA',
                                outline: "none"
                            }}
                        >
                        </div>
                    )
                }}
            />
            <div
                style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    fontFamily: "Nunito",
                    color: colors.gray,
                    fontSize: "18px"
                }}
            >
                <div>
                    {values[0].toFixed(toFixed || 0)}{units === "percentage" && "%"}
                </div>
                <div>
                    {values[1].toFixed(toFixed || 0)}{units === "percentage" && "%"}
                </div>
            </div>
        </div>
    );
};

export default TwoThumbs;