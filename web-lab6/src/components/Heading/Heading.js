import { Col, Container, Row } from "react-bootstrap"

export const Heading = () => {
    return (
        <Container >
            <Row className="mt-3 align-items-center">
                <Col xs={5}>
                    <img src="https://www.pngall.com/wp-content/uploads/13/Movie-Hollywood-No-Background.png" className="img-fluid"></img>
                </Col>
                <Col>
                    <h1>Films</h1>
                    <p>
                        The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md  jsx-a11y/anchor-is-valid
                    </p>
                </Col>
            </Row>

        </Container>
    )

}
