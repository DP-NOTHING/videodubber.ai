"use client"
import { useEffect } from 'react';

const ClarityTracking = () => {
    useEffect(() => {
        function prevurl() {
            const formData = new FormData();
            formData.append("last_url", document.referrer);
            formData.append("current_url", window.location);

            var xhr = new XMLHttpRequest();
            xhr.open("POST", "/prevurl", true);
            xhr.send(formData);
        }
        prevurl();
    }, []); // Empty dependency array to ensure useEffect runs only once on component mount

    return (
        <>
            {/* Google tag (gtag.js) */}
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-VRCL81G8M8"></script>
            <script>
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-VRCL81G8M8');
                `}
            </script>
            
            {/* Clarity tag */}
            <script type="text/javascript">
                {`
                    (function(c,l,a,r,i,t,y){
                        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                    })(window, document, "clarity", "script", "hd32g4k576");
                `}
            </script>

            {/* Google tag (gtag.js) */}
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-0PE3NF07WL"></script>
            <script>
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-0PE3NF07WL');
                `}
            </script>

            {/* Clarity tag */}
            <script type="text/javascript">
                {`
                    (function(c,l,a,r,i,t,y){
                        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                    })(window, document, "clarity", "script", "jlrurxwccq");
                `}
            </script>

            {/* Custom function for sending previous and current URLs */}
            <script type="text/javascript">
                {`
                    function prevurl() {
                        const formData = new FormData();
                        formData.append("last_url", document.referrer);
                        formData.append("current_url", window.location);

                        var xhr = new XMLHttpRequest();
                        xhr.open("POST", "/prevurl", true);
                        xhr.send(formData);
                    }
                    prevurl();
                `}
            </script>
        </>
    );
};

export default ClarityTracking;
