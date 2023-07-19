export const breakpoints = {
    xxs: 320,
    xs: 375,
    sm: 425,
    md: 768,
    lg: 1024,
    xl: 1440,
    xxl: 1920,
};

/**
 * For css media query.
 * example usage:
 * [media(sm)]:{
 *    width: 500
 *    ...
 * }
 */
export const mediaFrom = (minWidth: number): string =>
    `@media (min-width:${minWidth}px)`;

export const mediaTo = (maxWidth: number): string =>
    `@media (max-width:${maxWidth}px)`;

/**
 * Col breakpoints for @lite-components/dist/Grid.
 * example usage:
 * <Col span={[12, col(sm, 8), col(md, 4)]}>...</Col>
 * equivalent to <div class="col-12 col-sm-8 col-md-4">...</div>
 */

interface ColReturn {
    scrFrom: number;
    span: number;
}

export const col = (minWidth: number, span: number): ColReturn => ({
    scrFrom: minWidth,
    span,
});
