function FancyTable({n}) {
    return (
        Array.from(Array(n+1).keys()).map(function(item){
                return (
                    <li class="nav-item">
                        {item}
                    </li>
                );
            }
        )
    )
}
export default FancyTable;
