import React from 'react';
import styled from 'styled-components';

const CUSTOM = 'custom';
const CONSOLE = 'console';
const NONE = 'none';

export default ({ logger, setLogger }) => (
    <Container>
        <label>
            Event logger:{' '}
            <select
                value={logger}
                onChange={event => setLogger(event.target.value)}
            >
                <option value={CUSTOM}>Custom function</option>
                <option value={CONSOLE}>Console</option>
                <option value={NONE}>None</option>
            </select>
        </label>
    </Container>
);

const Container = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 10px;
`;
