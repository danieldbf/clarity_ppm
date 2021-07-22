SELECT
'<Company companyId="' || SRM_EMP.COMPANY_ID || '" externalId="' || SRM_EMP.EXTERNAL_ID || '" name="' || SRM_EMP.COMPANY_NAME || '" status="ACTIVE" type="VENDOR">
        <CustomInformation>            
            <ColumnValue name="partition_code">oi_ti</ColumnValue>
        </CustomInformation>        
    </Company>'
FROM
SRM_COMPANIES SRM_EMP
JOIN 
ODF_CA_COMPANY CA_EMP
ON SRM_EMP.ID = CA_EMP.ID
WHERE SRM_EMP.STATUS = 419 -- status active
