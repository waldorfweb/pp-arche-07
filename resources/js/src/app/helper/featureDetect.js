import { isNullOrUndefined, isDefined } from "./utils";

let _supportsPassive;

/**
 * Asynchronous function to detect webP support
 * @param callback
 */
export function detectWebP(callback, feature)
{
    if (isNullOrUndefined(feature))
    {
        feature = "lossy";
    }

    if (!isNullOrUndefined(App.features.webp) && !isNullOrUndefined(App.features.webp[feature]))
    {
        callback(App.features.webp[feature], feature);
        return;
    }

    const kTestImages = {
        "lossy": "UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",
        "lossless": "UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",
        "alpha": "UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",
        "animation": "UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"
    };
    const img = new Image();

    img.onload = function()
    {
        const result = (img.width > 0) && (img.height > 0);

        App.features.webp = { feature: result };
        callback(result, feature);
    };

    img.onerror = function()
    {
        App.features.webp = { feature: false };
        callback(false, feature);
    };

    img.src = "data:image/webp;base64," + kTestImages[feature];
}

/**
 * Detect if the parameter passive is supported for the method addEventListener (MSIE is not)
 */
export function detectPassiveEvents()
{
    if (isDefined(_supportsPassive))
    {
        return _supportsPassive;
    }

    _supportsPassive = false;

    try
    {
        const opts = Object.defineProperty({}, "passive", {
            get()
            {
                _supportsPassive = true;
            }
        });

        window.addEventListener("testPassive", null, opts);
        window.removeEventListener("testPassive", null, opts);
    }
    catch (error)
    {}

    return _supportsPassive;
}

/**
 * Detect if the IntersectionObserver is supported by the browser
 */
export function detectIntersectionObserver()
{
    return "IntersectionObserver" in window;
}
