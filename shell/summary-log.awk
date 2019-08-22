BEGIN{
    
}
{
    http_code = $9
    counts[http_code]++
}

END{
    for (i in counts)
        print "HTTP code:" i ": " counts[i]
}
